package com.dapps.webapp.Filters;

import com.dapps.webapp.Models.User;
import com.dapps.webapp.Services.MyUserDetailsService;
import com.dapps.webapp.Utils.CustomUserDetails;
import com.dapps.webapp.Utils.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    JwtUtil jwtUtil;
    @Autowired
    MyUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        String header = request.getHeader("Authorization");
        String email = null;
        String jwt = null;
        if ((header != null) && header.contains("jwt")){
            jwt = header.substring(4);

            try {
                email = jwtUtil.getUsernameFromToken(jwt);
            }
            catch (IllegalArgumentException e){
                System.out.println("Invalid jwt");
            }
            catch (ExpiredJwtException e){
                System.out.println("Expired jwt");
            }

        }
        if ((email != null) && (SecurityContextHolder.getContext().getAuthentication() == null)){
            CustomUserDetails userDetails = userDetailsService.loadUserByUsername(email);
            if(jwtUtil.validateToken(jwt,userDetails)){
                UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities());
                usernamePasswordAuthenticationToken
                        .setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                // After setting the Authentication in the context, we specify
                // that the current user is authenticated. So it passes the Spring Security Configurations successfully.
                SecurityContextHolder.getContext().setAuthentication(usernamePasswordAuthenticationToken);
            }
        }

        filterChain.doFilter(request,response);
    }
}

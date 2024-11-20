package com.capstone.backendapp.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    /**
     * Bean for password encoding using BCrypt.
     *
     * @return BCryptPasswordEncoder instance
     */
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    /**
     * Expose the AuthenticationManager as a bean for use in services.
     *
     * @param authConfig AuthenticationConfiguration provided by Spring
     * @return AuthenticationManager instance
     * @throws Exception if configuration fails
     */
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authConfig) throws Exception {
        return authConfig.getAuthenticationManager();
    }

    /**
     * Define security filter chain to configure HTTP security.
     *
     * @param http HttpSecurity to configure
     * @return SecurityFilterChain instance
     * @throws Exception if configuration fails
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf().disable() // Disable CSRF for APIs
                .authorizeHttpRequests(authorize -> authorize
                        .requestMatchers("/api/auth/**").permitAll() // Allow public access to authentication endpoints
                        .anyRequest().authenticated() // Protect other endpoints
                )
                .httpBasic().disable() // Disable HTTP Basic authentication
                .formLogin().disable(); // Disable form-based login

        return http.build();
    }
}


package com.ebook;

import java.util.Arrays;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.ebook.entites.Role;
import com.ebook.repository.RoleRepository;
import com.ebook.utils.AppConstant;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;


@SpringBootApplication
public class EbookApplication {

	@Autowired
	private RoleRepository roleRepo;

	public static void main(String[] args) {
		SpringApplication.run(EbookApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();

	}

	/*
	 * @Override public void run(String... args) throws Exception { Role r = new
	 * Role(); r.setId(AppConstant.ADMIN_ID); r.setRole("ROLE_ADMIN");
	 * 
	 * Role r2 = new Role(); r2.setId(AppConstant.USER_ID); r2.setRole("ROLE_USER");
	 * 
	 * List<Role> of = List.of(r, r2); roleRepo.saveAll(of); }
	 */


	@Bean
	public CorsFilter corsFilter() {
		CorsConfiguration corsConfiguration = new CorsConfiguration();
		corsConfiguration.setAllowCredentials(true);
		corsConfiguration.setAllowedOrigins(Arrays.asList("http://localhost:4200","http://localhost:3000"));
		corsConfiguration.setAllowedHeaders(Arrays.asList("Origin","Access-control-allow-Origin","Content-type",
				"Accept","Authorization","Origin, Accept","X-Request-With","Access-control-Request-Headers",
				"Access-control-Request-Method"));
		corsConfiguration.setExposedHeaders(Arrays.asList("Origin","Accept","Content-type","Authorization",
				"Access-control-Allow-Origin","Access-control-allow-Credentials"));
		corsConfiguration.setAllowedMethods(Arrays.asList("GET","POST","PUT","DELETE","OPTIONS"));
		UrlBasedCorsConfigurationSource urlBasedCorsConfigurationSource=new UrlBasedCorsConfigurationSource();
		urlBasedCorsConfigurationSource.registerCorsConfiguration("/**",corsConfiguration);
		return new CorsFilter(urlBasedCorsConfigurationSource);


	}

}

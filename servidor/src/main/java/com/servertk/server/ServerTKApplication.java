package com.servertk.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.data.rest.RepositoryRestMvcAutoConfiguration;

@SpringBootApplication(exclude = RepositoryRestMvcAutoConfiguration.class)
public class ServerTKApplication {

	public static void main(String[] args) {
		SpringApplication.run(ServerTKApplication.class, args);
	}
	

}

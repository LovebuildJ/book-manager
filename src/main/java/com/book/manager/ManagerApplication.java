package com.book.manager;

import com.github.xiaoymin.swaggerbootstrapui.annotations.EnableSwaggerBootstrapUI;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableSwaggerBootstrapUI
@EnableJpaRepositories
@SpringBootApplication
public class ManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ManagerApplication.class, args);
		System.out.println("| ---------------------------------------------------------------------------------- |");
		System.out.println("|                                    Started Success                                 |");
		System.out.println("| ---------------------------------------------------------------------------------- |");
	}

}

package com.reporting.application.controller;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.reporting.application.modal.LoginRequest;
import com.reporting.application.modal.LoginResponse;
import com.reporting.application.service.LoginService;


@RestController
public class ApplicationLoginController {
	
	@Autowired
	private LoginService loginService;
	
	@RequestMapping(value = "/hackathon/login", method = RequestMethod.POST , produces = {MediaType.APPLICATION_JSON_VALUE})
	public ResponseEntity<LoginResponse> validate(HttpServletRequest httpRequest, HttpServletResponse httpResponse, @RequestBody LoginRequest request) {
		
		LoginResponse response = loginService.getLoginResponse(request);
		
		if(response.getErrorInfo().size()>0) {
			response.setStatus("Failure");
			return new ResponseEntity(response, HttpStatus.FORBIDDEN);
		}else {
			response.setStatus("Success");
			return new ResponseEntity(response, HttpStatus.OK);
		}
		
		
	}

}

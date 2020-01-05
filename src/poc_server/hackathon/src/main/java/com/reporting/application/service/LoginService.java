package com.reporting.application.service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.reporting.application.dao.LoginDao;
import com.reporting.application.modal.Employee;
import com.reporting.application.modal.ErrorInfo;
import com.reporting.application.modal.LoginRequest;
import com.reporting.application.modal.LoginResponse;

@Service
public class LoginService {
	
	@Autowired
	private LoginDao loginDao;
	
	public LoginResponse getLoginResponse(LoginRequest request) {
		LoginResponse response = new LoginResponse();
		Employee employee = loginDao.getEmployee(request.getEmpId());
		if(null != employee) {
			System.out.println("Employee: "+ employee);
			response.setEmployee(employee);
			List<Integer> uiReporteeList = response.getReportees();
			List<Employee> reportees = loginDao.getReportees(request.getEmpId());
			if(null != reportees && reportees.size()>0) {
				for(Employee e:reportees) {
					uiReporteeList.add(e.getEmployeeId());
				}
			}
		}
		else {
			List<ErrorInfo> errorList = response.getErrorInfo();
			ErrorInfo errorInfo = new ErrorInfo();
			errorInfo.setErrorMessage("User Not Found");
			errorInfo.setErrorCode("404");
			errorList.add(errorInfo);
			
		}
		return response;
		
	}

}

package com.reporting.application.modal;

import java.util.ArrayList;
import java.util.List;

public class LoginResponse {
	
	private Employee employee;
	private List<Integer> reportees = new ArrayList<>();
	private String status;
	private List<ErrorInfo> errorInfo = new ArrayList<>();
	
	
	public List<ErrorInfo> getErrorInfo() {
		return errorInfo;
	}
	public void setErrorInfo(List<ErrorInfo> errorInfo) {
		this.errorInfo = errorInfo;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Employee getEmployee() {
		return employee;
	}
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	public List<Integer> getReportees() {
		return reportees;
	}
	public void setReportees(List<Integer> reportees) {
		this.reportees = reportees;
	}
	
	
	

}

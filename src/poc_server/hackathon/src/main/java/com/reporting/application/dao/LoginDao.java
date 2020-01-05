package com.reporting.application.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

import com.reporting.application.modal.Employee;


@Repository
public class LoginDao {
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	class EmployeeRowMapper implements RowMapper<Employee> {

		@Override
		public Employee mapRow(ResultSet rs, int rowNum) throws SQLException {
			Employee emp = new Employee();
			emp.setEmployeeId(rs.getInt("EMP_ID"));
			emp.setName(rs.getString("NAME"));
			emp.setRole(rs.getString("ROLE"));
			emp.setManagerId(rs.getInt("MANAGER"));
			return emp;
		}

	}
	
	public Employee getEmployee(int id) {
		return jdbcTemplate.queryForObject("select * from employee where EMP_ID = ?", new Object[] {id}, new EmployeeRowMapper());
		
	}
	
	public List<Employee> getAllEmployee() {
		return jdbcTemplate.query("select * from employee", new EmployeeRowMapper());
		
	}
	
	public List<Employee> getReportees(int id) {
		return jdbcTemplate.query("select * from employee where MANAGER = ?", new Object[] {id}, new EmployeeRowMapper());
		
	}

}

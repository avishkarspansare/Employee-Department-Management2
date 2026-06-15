package com.avishkar.service;

import com.avishkar.exception.ResourceNotFoundException;
import com.avishkar.model.Department;
import com.avishkar.repository.DepartmentRepository;
import com.avishkar.repository.EmployeeRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
public class DepartmentService {

    private final DepartmentRepository departmentRepository;
    private final EmployeeRepository employeeRepository;

    public DepartmentService(DepartmentRepository departmentRepository,
                             EmployeeRepository employeeRepository) {
        this.departmentRepository = departmentRepository;
        this.employeeRepository = employeeRepository;
    }

    @Transactional(readOnly = true)
    public List<Department> getAll() {
        return departmentRepository.findAll();
    }

    @Transactional(readOnly = true)
    public Department getById(Long id) {
        return departmentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with id: " + id));
    }

    @Transactional(readOnly = true)
    public Department findByName(String name) {
        return departmentRepository.findByNameIgnoreCase(name.trim())
                .orElseThrow(() -> new ResourceNotFoundException("Department not found with name: " + name));
    }

    /**
     * Creates a department; throws IllegalArgumentException if name already exists.
     */
    public Department create(String name) {
        String trimmed = name.trim();
        if (departmentRepository.existsByNameIgnoreCase(trimmed)) {
            throw new IllegalArgumentException("Department with this name already exists");
        }
        Department dept = new Department();
        dept.setName(trimmed);
        return departmentRepository.save(dept);
    }

    @Transactional(readOnly = true)
    public Map<String, Object> countEmployees(Long id) {
        getById(id); // validates existence
        long count = employeeRepository.countByDepartmentId(id);
        return Map.of("departmentId", id, "employeeCount", count);
    }
}

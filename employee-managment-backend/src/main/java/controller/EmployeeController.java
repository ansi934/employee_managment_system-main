/*package controller;
import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import model.Employee;
import repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173") // if frontend runs on port 3000
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        Employee employee = employeeRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (employee.getPassword().equals(loginRequest.getPassword())) {
            return new LoginResponse("Login successful", employee.getRole());
        } else {
            throw new RuntimeException("Invalid password");
        }
    }
}
*/

package controller;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.LoginResponse;
import model.Employee;
import repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173") // allow frontend
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // 🔹 Login endpoint
    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest loginRequest) {
        Employee employee = employeeRepository.findByEmail(loginRequest.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (employee.getPassword().equals(loginRequest.getPassword())) {
            return new LoginResponse("Login successful", employee.getRole());
        } else {
            throw new RuntimeException("Invalid password");
        }
    }

    // 🔹 Create employee endpoint
    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    // 🔹 Get all employees endpoint
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // 🔹 (Optional) Get one employee by ID
    @GetMapping("/{id}")
    public Employee getEmployeeById(@PathVariable Long id) {
        return employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));
    }
    
 // 🔹 Delete employee by ID
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        employeeRepository.delete(employee);
        return "Employee with ID " + id + " deleted successfully";
    }
 // 🔹 Update employee by ID
    @PutMapping("/{id}")
    public Employee updateEmployee(@PathVariable Long id, @RequestBody Employee updatedEmployee) {
        Employee existingEmployee = employeeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Employee not found"));

        // Update fields (example: name, email, role, password)
        existingEmployee.setName(updatedEmployee.getName());
        existingEmployee.setEmail(updatedEmployee.getEmail());
        existingEmployee.setRole(updatedEmployee.getRole());
        existingEmployee.setPassword(updatedEmployee.getPassword());

        return employeeRepository.save(existingEmployee);
    }

    
}

package com.example.patientapi.controller;

import com.example.patientapi.model.Patient;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/patients")
public class PatientController {

    @GetMapping
    public ResponseEntity<List<Patient>> getAllPatients() {
        List<Patient> patients = Arrays.asList(
                new Patient(1L, "John Doe", 30),
                new Patient(2L, "Jane Smith", 25),
                new Patient(3L, "Robert Brown", 45)
        );
        return new ResponseEntity<>(patients, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Patient> createPatient(@RequestBody Patient patient) {
        System.out.println("Received Patient: " + patient);
        // In a real app, we would save the patient here.
        // For now, we just return it with a 201 Created status.
        return new ResponseEntity<>(patient, HttpStatus.CREATED);
    }
}

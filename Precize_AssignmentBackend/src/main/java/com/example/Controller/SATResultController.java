package com.example.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.SATresultdto;
import com.example.pojos.SATResult;
import com.example.services.SATResult_services;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/SATResult")
public class SATResultController {
	
	
	@Autowired(required=true)
	private SATResult_services SatServices;
	
	@GetMapping
	public List<SATResult> ViewSatResult(){
		return SatServices.ViewSATResult();
	}
	
	@PostMapping
	public SATResult insertSatResult(@RequestBody SATresultdto satResult) {
		return SatServices.InsertSATResult(satResult);
	}
	
	@GetMapping("/{name}/rank")
	public int GetRank(@PathVariable("name") String name) {
		return SatServices.GetByName(name);
	}
	
	@PutMapping("/{name}")
	public SATResult UpdateScore(@PathVariable("name") String name,@RequestParam("SatScore") int score) {
		return SatServices.UpdateScore(name, score);
	}
	
	@DeleteMapping("/{name}")
	public void DeleteByName(@PathVariable("name") String name) {
		SatServices.DeleteByName(name);
		
	}

}

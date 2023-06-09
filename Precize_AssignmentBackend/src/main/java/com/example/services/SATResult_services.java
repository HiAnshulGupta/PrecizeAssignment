package com.example.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Repository.SATResultRepository;
import com.example.dto.SATresultdto;
import com.example.pojos.SATResult;



public interface SATResult_services {
	
	SATResult InsertSATResult(SATresultdto satResult);
	List<SATResult> ViewSATResult();
	
	int GetByName(String name);
	SATResult UpdateScore(String name,int newScore);
	void DeleteByName(String name);
}

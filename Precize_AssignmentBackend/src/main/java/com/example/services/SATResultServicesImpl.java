package com.example.services;

import java.util.List;

import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.example.Repository.SATResultRepository;
import com.example.dto.SATresultdto;
import com.example.pojos.SATResult;

@Service
@Transactional

public class SATResultServicesImpl implements SATResult_services {

	@Autowired
	private SATResultRepository sat;
	
	
	@Autowired
	private ModelMapper modelMapper;

	

	@Override
	public SATResult InsertSATResult(SATresultdto satResult) {

		SATResult SR = modelMapper.map(satResult, SATResult.class);
		SR.cal_Passed();
		return sat.save(SR);
	}

	@Override
	public List<SATResult> ViewSATResult() {
		// TODO Auto-generated method stub
		return sat.findAll();
	}

	@Override
	public int GetByName(String name) {
//		int rank= "select count from satresult where name={name}";
//		return sat.findByName(name).getSatScore();
		int Rank = sat.GetByRank(name);
		return Rank;
	}

	@Override
	public SATResult UpdateScore(String name, int newScore) {
		SATResult satResult = sat.findByName(name);
		if (satResult != null) {
			satResult.setSatScore(newScore);
			satResult.cal_Passed();
			return sat.save(satResult);
		}
		return null;
	}

	@Override
	public void DeleteByName(String name) {
		SATResult satResult = sat.findByName(name);
		if (satResult != null) {
			sat.delete(satResult);
			System.out.println("Deleted Succesfully");

		} else
			System.out.println("Name is not found");

	}

}

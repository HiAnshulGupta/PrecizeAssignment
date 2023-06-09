package com.example.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class SATresultdto {
	private String name;
	
    private String address;
	
    private String city;
	
    private String country;
	
    private String pincode;
	
    private int satScore;
    
   
}

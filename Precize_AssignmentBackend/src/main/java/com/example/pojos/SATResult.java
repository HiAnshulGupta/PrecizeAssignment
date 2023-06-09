package com.example.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "SATResult")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class SATResult {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(length = 20)
	private String name;
	@Column(length = 100)
	private String address;
	@Column(length = 20)
	private String city;
	@Column(length = 20)
	private String country;
	@Column(length = 20)
	private String pincode;
	@Column(length = 20)
	private int satScore;
	@Column(length = 20)

	private boolean passed;

	public void cal_Passed() {
		this.passed = this.satScore > 30;
	}

}

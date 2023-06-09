package com.example.Repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.example.pojos.SATResult;

@Repository
public interface SATResultRepository extends JpaRepository<SATResult, Long> {

	SATResult findByName(String name);

	@Query("SELECT COUNT(*)+1 AS Rank FROM SATResult\r\n"
			+ "WHERE satScore > (SELECT satScore FROM SATResult WHERE name = :name)")
	int GetByRank(@Param("name") String name);
		
	
	
	

}

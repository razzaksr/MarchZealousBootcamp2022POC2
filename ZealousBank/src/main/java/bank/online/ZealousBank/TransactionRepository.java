package bank.online.ZealousBank;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long>
{
	// findAll	>> multiple
	// findAllByDot	>> multiple data by dot
	// 
	// findBy	>> single
	// findById	>> single data by primary key
	// findByAmount	>> single data by amount
	
	public List<Transaction> findAllByAccount(Account account);
}

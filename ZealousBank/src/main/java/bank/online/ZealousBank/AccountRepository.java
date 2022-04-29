package bank.online.ZealousBank;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long>
{
	// Hibernate Query Language
	// ("select * from table where cusromer_id and password") sql
	@Query("from Account where customerId=:cust and password=:pass")
	public Account findAccountByValidation(long cust,String pass);
}

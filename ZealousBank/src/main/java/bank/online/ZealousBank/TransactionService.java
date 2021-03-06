package bank.online.ZealousBank;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionService 
{
	@Autowired
	TransactionRepository repo;
	
	public Transaction newOne(Transaction transaction)
	{
		return repo.save(transaction);
	}
	
	public List<Transaction> getByAccount(Account account)
	{
		return repo.findAllByAccount(account);
	}
}

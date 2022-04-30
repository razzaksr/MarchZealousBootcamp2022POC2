package bank.online.ZealousBank;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService 
{
	@Autowired
	AccountRepository repo;
	
	public Account gettingByNumberExact(long number)
	{
		return repo.findById(number).orElse(new Account());
	}
	
	public String erasing(long num)
	{
		Account account=repo.findById(num).orElse(new Account());
		String t = account.getAccountHolder()+" has deleted";
		repo.delete(account);
		return t;
	}
	
	public Account savingAccount(Account account)
	{
		return repo.save(account);
	}
	
	public Account getByValid(long data1,String data2)
	{
		return repo.findAccountByValidation(data1, data2);
	}
}

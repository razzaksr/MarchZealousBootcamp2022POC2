package bank.online.ZealousBank;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BankController 
{
	@Autowired
	AccountService aserv;
	@Autowired
	TransactionService tserv;
	
	@DeleteMapping("/del/{key}")
	public String callErase(@PathVariable("key") long key)
	{
		return aserv.erasing(key);
		//return aserv.erasing(account);
	}
	
	@PutMapping("/upacc")
	public String accountUpdate(@RequestBody Account account)
	{
		Account obj=aserv.savingAccount(account);
		return obj.getAccountNumber()+" has updated for "+account.getAccountHolder();
	}
	
	@PostMapping("/login")
	public Account callValid(@RequestParam("cid") long cid,@RequestParam("ps") String ps)
	{
		return aserv.getByValid(cid, ps);
	}
	
	@PostMapping("/newacc")
	public String accountCreate(@RequestBody Account account)
	{
		Account obj=aserv.savingAccount(account);
		return obj.getAccountNumber()+" has openned for "+account.getAccountHolder();
	}
	
}

package bank.online.ZealousBank;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;

import org.springframework.lang.Nullable;

@Entity
public class Account 
{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long accountNumber;
	private String accountHolder;
	private double accountBalance;
	private long contact;
	private String password;
	private String email;
	@Column(unique = true)
	private long customerId;
	@OneToMany(fetch = FetchType.LAZY,cascade = CascadeType.ALL)
	@JoinTable(name = "EveryRecord",joinColumns = @JoinColumn(name="AccountNo"),inverseJoinColumns = @JoinColumn(name="TransactionId"))
	@Nullable
	private Collection<Transaction> mytrans=new ArrayList<Transaction>();
	public Account() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Account(String accountHolder, double accountBalance, long contact, String password, String email,
			long customerId, Collection<Transaction> mytrans) {
		super();
		this.accountHolder = accountHolder;
		this.accountBalance = accountBalance;
		this.contact = contact;
		this.password = password;
		this.email = email;
		this.customerId = customerId;
		this.mytrans = mytrans;
	}

	@Override
	public String toString() {
		return "Account [accountNumber=" + accountNumber + ", accountHolder=" + accountHolder + ", accountBalance="
				+ accountBalance + ", contact=" + contact + ", email=" + email + ", customerId=" + customerId
				+ ", mytrans=" + mytrans + "]";
	}
	public long getAccountNumber() {
		return accountNumber;
	}
	public void setAccountNumber(long accountNumber) {
		this.accountNumber = accountNumber;
	}
	public String getAccountHolder() {
		return accountHolder;
	}
	public void setAccountHolder(String accountHolder) {
		this.accountHolder = accountHolder;
	}
	public double getAccountBalance() {
		return accountBalance;
	}
	public void setAccountBalance(double accountBalance) {
		this.accountBalance = accountBalance;
	}
	public long getContact() {
		return contact;
	}
	public void setContact(long contact) {
		this.contact = contact;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(long customerId) {
		this.customerId = customerId;
	}
	public Collection<Transaction> getMytrans() {
		return mytrans;
	}
	public void setMytrans(Collection<Transaction> mytrans) {
		this.mytrans = mytrans;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}

package bank.online.ZealousBank;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class Transaction 
{
	@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	private String type;
	private Date dot;
	private double amount;
	@ManyToOne
	private Account account;
	public Transaction() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Transaction(String type, Date dot, double amount, Account account) {
		super();
		this.type = type;
		this.dot = dot;
		this.amount = amount;
		this.account = account;
	}
	@Override
	public String toString() {
		return "Transaction [id=" + id + ", type=" + type + ", dot=" + dot + ", amount=" + amount + ", account="
				+ account + "]";
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Date getDot() {
		return dot;
	}
	public void setDot(Date dot) {
		this.dot = dot;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public Account getAccount() {
		return account;
	}
	public void setAccount(Account account) {
		this.account = account;
	}
}

package com.ega.transaction.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Entity
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue
    private Long transactionId;

    private String accountNumber;

    private Long transactionAmount;

    private Timestamp transactionDateTime;

    public Transaction() {
    }

    public Transaction(Long transactionId, String accountNumber, Long transactionAmount, Timestamp transactionDateTime) {
        this.transactionId = transactionId;
        this.accountNumber = accountNumber;
        this.transactionAmount = transactionAmount;
        this.transactionDateTime = transactionDateTime;
    }

    public Long getTransactionId() {
        return transactionId;
    }

    public void setTransactionId(Long transactionId) {
        this.transactionId = transactionId;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public Long getTransactionAmount() {
        return transactionAmount;
    }

    public void setTransactionAmount(Long transactionAmount) {
        this.transactionAmount = transactionAmount;
    }

    public Timestamp getTransactionDateTime() {
        return transactionDateTime;
    }

    public void setTransactionDateTime(Timestamp transactionDateTime) {
        this.transactionDateTime = transactionDateTime;
    }
}

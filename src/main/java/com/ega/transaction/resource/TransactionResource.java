package com.ega.transaction.resource;

import com.ega.transaction.model.Transaction;
import com.ega.transaction.model.UserTransaction;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/trans")
public class TransactionResource {
    @RequestMapping("/{userId}")
    public Transaction getTransaction(@PathVariable("userId") String userId){
        return new Transaction();
    }

    @RequestMapping("users/{userId}")
    public UserTransaction getTransactions(@PathVariable("userId") String userId){
       List<Transaction> transactions = Arrays.asList(
               new Transaction(),
               new Transaction()
       );

       UserTransaction userTransaction = new UserTransaction();
       userTransaction.setUserTransaction(transactions);


       return userTransaction;

    }
}

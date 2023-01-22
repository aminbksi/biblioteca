package com.biblioteca.springbootbiblioteca.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.biblioteca.springbootbiblioteca.entity.Book;

public interface BookRepository extends JpaRepository<Book, Long> {
    
}

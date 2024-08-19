package com.ebook.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ebook.entites.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    public Optional<Role> findByRole(String name);

}

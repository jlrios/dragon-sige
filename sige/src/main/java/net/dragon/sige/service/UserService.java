package net.dragon.sige.service;

import net.dragon.sige.entity.User;

import java.util.List;

public interface UserService {
    User save(User user);
    List<User> findAll();
    User findById(Long id);
    User findByName(String userName);
    void deleteById(Long id);
    User update(User user);
}

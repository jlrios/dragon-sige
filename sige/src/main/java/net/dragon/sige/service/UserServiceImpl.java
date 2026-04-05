package net.dragon.sige.service;

import net.dragon.sige.entity.User;
import net.dragon.sige.exception.ResourceNotFoundException;
import net.dragon.sige.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(Long id) {
        User user = userRepository.findById(id).orElseThrow(() -> {
            throw new ResourceNotFoundException("User with id " + id + ", was not found...");
        });
        // return userRepository.findById(id).get();
        return user;
    }

    @Override
    public void deleteById(Long id) {
        userRepository.deleteById(id);
    }

    @Override
    public User update(User user) {
        return userRepository.save(user);
    }
}

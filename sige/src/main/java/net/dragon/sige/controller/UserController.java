package net.dragon.sige.controller;

import net.dragon.sige.entity.User;
import net.dragon.sige.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // @PostMapping("/create")
    @PostMapping
    public User save(@RequestBody User user) {
        return userService.save(user);
    }

    @GetMapping
    public List<User> findAll() {
        return userService.findAll();
    }

    @GetMapping("/{id}")
    public User findById(@PathVariable Long id) {
        return userService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        userService.deleteById(id);
    }

    @PutMapping
    public User updateUser(@RequestBody  User user) {
        User userDb = userService.findById(user.getId());
        userDb.setUserName(user.getUserName());
        userDb.setPasswordHash(user.getPasswordHash());
        userDb.setUserRole(user.getUserRole());
        userDb.setIsActive(user.getIsActive());
        userDb.setLastLogin(user.getLastLogin());
        userDb.setCreatedAt(user.getCreatedAt());
        userDb.setUpdatedAt(user.getUpdatedAt());
        return userService.update(userDb);
    }
}

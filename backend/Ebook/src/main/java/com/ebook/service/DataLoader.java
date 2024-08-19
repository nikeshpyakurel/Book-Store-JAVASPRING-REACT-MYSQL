package com.ebook.service;


import com.ebook.dto.UserDto;
import com.ebook.entites.Role;
import com.ebook.entites.User;
import com.ebook.mapper.UserMapper;
import com.ebook.repository.RoleRepository;
import com.ebook.repository.UserRepository;
import com.ebook.utils.AppConstant;
import java.util.Collections;
import java.util.Set;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@AllArgsConstructor
public class DataLoader implements ApplicationRunner {


    private final RoleRepository roleRepository;
    private final UserRepository userRepository;

    @Autowired
    private UserMapper userMapper;



    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    @Override
    public void run(ApplicationArguments args) throws Exception {

        initializeRoles();
        initAdmin();

    }

    private void initAdmin(){


          if (!userRepository.existsByEmail("admin@gmail.com")) {

              Role role1 = new Role();
              role1.setId(AppConstant.ADMIN_ID);
              role1.setRole(AppConstant.ADMIN_ID.toString());

              User user = new User();
              user.setPassword(passwordEncoder.encode("admin"));
              user.getRole().add(role1);
              user.setMobNo("+111111111111");
              user.setEmail("admin@gmail.com");
              user.setName("admin");

              userRepository.save(user);
          }else {
              System.out.println("Admin already added");
          }
       }







       @Transactional
    public void initAdin1(){
        UserDto userDto =new UserDto();
        userDto.setPassword("admin");
        userDto.setEmail("admin@gmail.com");

        User user = userMapper.dtoToUser(userDto);

        user.setPassword(passwordEncoder.encode(userDto.getPassword()));

        Role role = roleRepository.findByRole(AppConstant.ADMIN_ID.toString()).
                            orElseThrow(()-> new RuntimeException("can not find role"));
        user.getRole().add(role);

       //userMapper.userToDto(userRepository.save(user));
    }

    private void initializeRoles() {

        if (roleRepository.count() == 0) {
            // If not, add them
            Role role =new Role();
            role.setId(102);
            role.setRole(AppConstant.USER_ID.toString());
            roleRepository.save(role);

          /*  Role adminRole = new Role();
            adminRole.setId(101);
            adminRole.setRole(AppConstant.ADMIN_ID.toString());
           roleRepository.save(adminRole);*/

            System.out.println("Roles added to the database.");
        } else {
            System.out.println("Roles already exist in the database.");
        }
    }
}

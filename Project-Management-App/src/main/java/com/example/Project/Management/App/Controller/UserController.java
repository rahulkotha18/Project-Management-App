package com.example.Project.Management.App.Controller;
import com.example.Project.Management.App.Dto.UserDto;
import com.example.Project.Management.App.Entities.Project;
import com.example.Project.Management.App.Entities.Task;
import com.example.Project.Management.App.Entities.Team;
import com.example.Project.Management.App.Entities.User;
import com.example.Project.Management.App.Service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import java.util.stream.Collectors;

@RestController("/")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    ModelMapper modelMapper;
    @GetMapping("users")
    public List<UserDto> getUsers(){
        List<User> userList=userService.getUsers();
        return userList.stream()
                .map(this::convertToDto)
                .collect(Collectors.toList());
    }
    private UserDto convertToDto(User user) {
        UserDto userDto = modelMapper.map(user, UserDto.class);
        return userDto;
    }
    @GetMapping("projects")
    public List<Project> getProjects(){
        return userService.getProjects();
    }
    @GetMapping("teams")
    public List<Team> getTeams(){
        return userService.getTeams();
    }
    @GetMapping("tasks")
    public List<Task> getTasks(){
        return userService.getTasks();
    }
}

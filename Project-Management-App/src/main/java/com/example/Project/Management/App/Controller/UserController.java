package com.example.Project.Management.App.Controller;
import com.example.Project.Management.App.Dto.UserDto;
import com.example.Project.Management.App.Entities.Project;
import com.example.Project.Management.App.Entities.Task;
import com.example.Project.Management.App.Entities.Team;
import com.example.Project.Management.App.Entities.User;
import com.example.Project.Management.App.Pojo.TaskPojo;
import com.example.Project.Management.App.Service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController("/")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    ModelMapper modelMapper;
    @GetMapping("user")
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
    @GetMapping("project")
    public List<Project> getAllProjects(){
        return userService.getProjects();
    }

    @GetMapping("project/{userid}")
    public Set<Project> getUserProjects(@PathVariable int userid)
    {
        return userService.getUserProjects(userid);
    }

    @GetMapping("team")
    public List<Team> getAllTeams(){

        return userService.getTeams();
    }

    @GetMapping("team/{userid}")
    public Set<Team> getMyTeams(@PathVariable int userid)
    {
        return userService.getUserTeams(userid);
    }

    @GetMapping("task")
    public List<Task> getAllTasks(){
        return userService.getTasks();
    }
    @GetMapping("task/{userid}")
    public Set<Task> getMyTasks(@PathVariable int userid){
        return userService.getTasksById(userid);
    }

    @DeleteMapping("/task/{id}")
    public String deleteTask(@PathVariable int id)
    {
        return userService.deleteTask(id);
    }
    @PostMapping("task")
    public Task saveTask(@RequestBody TaskPojo taskPojo)throws Exception
    {
        return userService.saveTask(taskPojo);
    }
}

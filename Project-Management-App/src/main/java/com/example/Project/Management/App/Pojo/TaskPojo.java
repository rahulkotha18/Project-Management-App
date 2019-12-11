package com.example.Project.Management.App.Pojo;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class TaskPojo {
    private int id;
    private String name;
    private String description;
    private String date;
    private int userid;
    private int projectid;
    @Override
    public String toString() {
        return "TaskPojo{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                ", userid=" + userid +
                ", projectid=" + projectid +
                '}';
    }
}

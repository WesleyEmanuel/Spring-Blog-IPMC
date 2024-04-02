package com.ipmc.blogipmc.requests;

import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class PublicationPostRequestBody {
    @NotNull(message = "The publication title cannot be null")
    @NotEmpty(message = "The publication title cannot be empty")
    private String title;

    @NotNull(message = "The publication subtitle cannot be null")
    private String subtitle;

    @NotNull(message = "The publication subtitle cannot be null")
    private String author;

    @NotNull(message = "The publication content cannot be null")
    @NotEmpty(message = "The publication content cannot be empty")
    private String content;
}

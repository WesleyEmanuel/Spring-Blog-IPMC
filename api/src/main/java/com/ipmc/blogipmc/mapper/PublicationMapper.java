package com.ipmc.blogipmc.mapper;

import com.ipmc.blogipmc.domain.Publication;
import com.ipmc.blogipmc.requests.PublicationPostRequestBody;
import com.ipmc.blogipmc.utils.DateUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.time.LocalDateTime;

@Component
@RequiredArgsConstructor
public class PublicationMapper {

    private final DateUtil dateUtil;

    public Publication publicationPostRequestBodyToPublication(PublicationPostRequestBody publicationPostRequestBody){
        return Publication.builder()
                .title(publicationPostRequestBody.getTitle())
                .subtitle(publicationPostRequestBody.getSubtitle())
                .content(publicationPostRequestBody.getContent())
                .dateTime(dateUtil.formatLocalDateTimeToDatabaseStyle(LocalDateTime.now()))
                .build();
    }
}

package com.ipmc.blogipmc.controllers;

import com.ipmc.blogipmc.domain.Publication;
import com.ipmc.blogipmc.requests.PublicationPostRequestBody;
import com.ipmc.blogipmc.services.PublicationService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "publication")
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class PublicationController {
    private final PublicationService publicationService;
    @GetMapping
    public ResponseEntity<Page<Publication>> getPaginatedPublications(Pageable pageable){
        return new ResponseEntity<>(
                publicationService.getPaginatedPublications(pageable), HttpStatus.OK
        );
    }

    @PostMapping
    public ResponseEntity<Publication> createNewPublication(
            @RequestBody @Valid PublicationPostRequestBody publicationPostRequestBody
    ){
        return new ResponseEntity<>(
                publicationService.createNewPublication(publicationPostRequestBody),
                HttpStatus.CREATED
        );
    }
}

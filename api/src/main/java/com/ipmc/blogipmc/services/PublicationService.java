package com.ipmc.blogipmc.services;

import com.ipmc.blogipmc.domain.Publication;
import com.ipmc.blogipmc.mapper.PublicationMapper;
import com.ipmc.blogipmc.repository.PublicationRepository;
import com.ipmc.blogipmc.requests.PublicationPostRequestBody;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class PublicationService {
    private final PublicationRepository publicationRepository;
    private final PublicationMapper publicationMapper;

    public Page<Publication> getPaginatedPublications(Pageable pageable) {
        return publicationRepository.findAll(pageable);
    }

    public Publication createNewPublication(PublicationPostRequestBody publicationPostRequestBody){
        Publication newPublication = publicationMapper.publicationPostRequestBodyToPublication(
                publicationPostRequestBody
        );

        return publicationRepository.save(newPublication);
    }

    public Publication getPublicationById(Long id) {
        return publicationRepository.findById(id).orElse(null);
    }
}

package com.ipmc.blogipmc.repository;

import com.ipmc.blogipmc.domain.Publication;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PublicationRepository extends JpaRepository<Publication, Long> {
}

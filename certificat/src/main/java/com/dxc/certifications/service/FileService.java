package com.dxc.certifications.service;

import com.dxc.certifications.entity.FileEntity;
import com.dxc.certifications.repository.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class FileService {
    private final FileRepository fileRepository;

    @Autowired
    public FileService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public void save(MultipartFile file, String idRessource) throws IOException {
        System.out.println("-----------> we are in the service");
        FileEntity fileEntity = new FileEntity();
        fileEntity.setIdRessource(idRessource);
        fileEntity.setName(StringUtils.cleanPath(file.getOriginalFilename()));
        fileEntity.setContentType(file.getContentType());
        fileEntity.setData(file.getBytes());
        fileEntity.setSize(file.getSize());

        fileRepository.save(fileEntity);
    }

    public Optional<FileEntity> getFile(String idRessource) {
        return fileRepository.findById(idRessource);
    }

    public List<FileEntity> getAllFiles() {
        return fileRepository.findAll();
    }
}

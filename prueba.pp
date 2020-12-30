include 'docker'

  docker::image {'pjblanco/practica':
    image_tag => 'latest'
  }

  docker::run{'prueba':
    image => 'pjblanco/practica',
    ports => ['3000':'3000'],
  }

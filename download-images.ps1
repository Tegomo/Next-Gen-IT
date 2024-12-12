$images = @{
    "hero/services-hero.jpg" = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
    "hero/contact-hero.jpg" = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070"
    "hero/realisations-hero.jpg" = "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070"
    "realisations/ecommerce.jpg" = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015"
    "realisations/sante.jpg" = "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
    "realisations/industrie.jpg" = "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?q=80&w=2070"
    "realisations/formation.jpg" = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070"
    "realisations/smart-building.jpg" = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069"
    "realisations/rh.jpg" = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
    "services/infographie.jpg" = "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071" # Image pour le service d'infographie
    "services/support-technique.jpg" = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070" # Image pour le support technique
    "services/consultation.jpg" = "https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070" # Image pour la consultation
    "services/gestion-projet.jpg" = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015" # Image pour la gestion de projet
    "services/developpement.jpg" = "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070" # Image pour le développement
    "services/reseaux.jpg" = "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070" # Image pour la gestion réseaux
    "contact/map-paris.jpg" = "https://images.unsplash.com/photo-1577086664693-894d8405334a?auto=format&fit=crop&q=80"
    "contact/map-lachine.jpg" = "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144" # Vue aérienne urbaine pour Lachine
}

foreach ($image in $images.GetEnumerator()) {
    $outputPath = Join-Path "public/images" $image.Key
    $outputDir = Split-Path $outputPath -Parent
    
    if (-not (Test-Path $outputDir)) {
        New-Item -ItemType Directory -Force -Path $outputDir
    }
    
    Write-Host "Downloading $($image.Key)..."
    Invoke-WebRequest -Uri $image.Value -OutFile $outputPath
}

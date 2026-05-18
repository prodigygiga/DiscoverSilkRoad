# Image Assets — Discover Silk Road

Place your images in this folder using the filenames below.
For each image, provide **both** a `.jpg` (fallback) and a `.webp` (modern).
Responsive variants are noted where required.

---

## Hero
| File | Size | Notes |
|------|------|-------|
| `hero-1920.jpg` / `.webp` | 1920 × 1080 | Mountain landscape with stone house |
| `hero-1280.jpg` / `.webp` | 1280 × 720 | Tablet crop |
| `hero-768.jpg`  / `.webp` | 768  × 1024 | Portrait/tablet crop |
| `hero-480.jpg`  / `.webp` | 480  × 854  | Mobile crop |

## Tour Cards (3:2 ratio, 600 × 400 min)
| File | Subject |
|------|---------|
| `tour-classic-georgia.jpg` / `.webp` | Mountain village path |
| `tour-black-sea.jpg` / `.webp`       | Batumi skyline |
| `tour-wine-heritage.jpg` / `.webp`   | Kakheti vineyards |
| `tour-silk-road.jpg` / `.webp`       | Rabati Castle |

## Destination Cards (3:4 ratio, 600 × 700 min)
| File | Responsive variants |
|------|---------------------|
| `dest-batumi.jpg` / `.webp`        | also `dest-batumi-480`, `dest-batumi-768` |
| `dest-kazbegi.jpg` / `.webp`       | also `dest-kazbegi-480` |
| `dest-kakheti.jpg` / `.webp`       | also `dest-kakheti-480` |
| `dest-rabati.jpg` / `.webp`        | also `dest-rabati-480` |

## About Section
| File | Ratio | Notes |
|------|-------|-------|
| `about-landscape.jpg` / `.webp` | 4:5 | Main image — guide in alpine meadow |
| `about-culture.jpg` / `.webp`   | 4:5 | Accent image — Georgian choir / culture |

## Gallery (see gallery__grid layout)
| File | Grid slot | Ideal size |
|------|-----------|------------|
| `gallery-01.jpg` / `.webp` | Wide (col-span 2) | 900 × 600 |
| `gallery-02.jpg` / `.webp` | Normal           | 600 × 600 |
| `gallery-03.jpg` / `.webp` | Normal           | 600 × 600 |
| `gallery-04.jpg` / `.webp` | Normal           | 600 × 600 |
| `gallery-05.jpg` / `.webp` | Tall (row-span 2)| 600 × 900 |
| `gallery-06.jpg` / `.webp` | Wide (col-span 2)| 900 × 600 |

## Testimonial Avatars (1:1, 112 × 112 min)
| File |
|------|
| `testimonial-01.jpg` / `.webp` |
| `testimonial-02.jpg` / `.webp` |
| `testimonial-03.jpg` / `.webp` |

---

### Converting JPG → WebP (via cwebp or ImageMagick)
```bash
# cwebp (recommended)
cwebp -q 82 hero-1920.jpg -o hero-1920.webp

# ImageMagick
magick hero-1920.jpg -quality 82 hero-1920.webp
```

### Extracting from WordPress media library
If your WP export is in `wp-content/uploads/`, copy images from there
and rename them to match the filenames above.

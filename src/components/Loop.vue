<script>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  name: 'Loop',
  props: {
    slides: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(
            (slide) =>
                typeof slide.image === 'string' &&
                typeof slide.title === 'string' &&
                typeof slide.link === 'string'
        );
      },
    },
  },
  setup(props) {
    const currentIndex = ref(0);

    let slideInterval = null;

    const nextSlide = () => {
      currentIndex.value = (currentIndex.value + 1) % props.slides.length;
    };

    const prevSlide = () => {
      currentIndex.value =
          (currentIndex.value - 1 + props.slides.length) % props.slides.length;
    };

    const goToSlide = (index) => {
      currentIndex.value = index;
    };

    const startSlide = () => {
      slideInterval = setInterval(nextSlide, 5000); // 每5秒切换一次
    };

    const stopSlide = () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }
    };

    onMounted(() => {
      AOS.init({
        duration: 1000, // 动画持续时间
        once: true, // 动画只执行一次
      });
      startSlide();
    });

    onBeforeUnmount(() => {
      stopSlide();
    });

    // 计算幻灯片的位移
    const slideStyle = computed(() => {
      return {
        transform: `translateX(-${currentIndex.value * 100}%)`,
      };
    });

    return {
      currentIndex,
      nextSlide,
      prevSlide,
      goToSlide,
      slideStyle,
    };
  },
};
</script>

<template>
  <div class="carousel-container" data-aos="fade-up">
    <div class="carousel">
      <!-- 幻灯片包装器 -->
      <div class="carousel-slides" :style="slideStyle">
        <!-- 轮播项 -->
        <div
            class="carousel-slide"
            v-for="(slide, index) in slides"
            :key="index"
        >
          <a
              :href="slide.link"
              class="carousel-item-img"
              :style="{ backgroundImage: `url(${slide.image})` }"
          ></a>
          <div class="carousel-caption">
            <p>{{ slide.title }}</p>
          </div>
        </div>
      </div>

      <!-- 分页指示器 -->
      <ol class="carousel-indicators">
        <li
            v-for="(slide, index) in slides"
            :key="index"
            :class="{ active: index === currentIndex }"
            @click="goToSlide(index)"
        ></li>
      </ol>

      <!-- 左右切换按钮 -->
      <button
          class="carousel-control prev"
          @click="prevSlide"
          aria-label="Previous"
      >
        <span class="control-icon prev-icon" aria-hidden="true"></span>
      </button>
      <button
          class="carousel-control next"
          @click="nextSlide"
          aria-label="Next"
      >
        <span class="control-icon next-icon" aria-hidden="true"></span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel {
  position: relative;
  width: 100%;
  height: 524px;
}

.carousel-slides {
  display: flex;
  width: 100%;
  height: 100%;
  transition: transform 0.5s ease-in-out;
}

.carousel-slide {
  min-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

/* 确保图片在背景层 */
.carousel-item-img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  z-index: 1; /* 设置较低的 z-index */
}

/* 确保标题在图片之上 */
.carousel-caption {
  position: absolute;
  left: 0;
  bottom: 10px;
  width: 100%;
  padding: 10px 20px;
  background: transparent;
  color: white;
  display: flex;
  justify-content: left;
  align-items: center;
  z-index: 2; /* 设置较高的 z-index */
}


.carousel-caption p {
  margin: 0;
  font-size: 1.2rem;
}

.carousel-indicators {
  position: absolute;
  right: 1.5rem; /* 调整右边距 */
  bottom: 10px;
  display: flex;
  gap: 8px;
  list-style: none;
}

.carousel-indicators li {
  width: 30px; /* 设置为横条的宽度 */
  height: 4px; /* 设置为横条的高度 */
  background-color: rgba(255, 255, 255, 0.5); /* 默认灰白色 */
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 2px; /* 轻微圆角 */
}

.carousel-indicators li.active {
  background-color: rgba(255, 255, 255, 1); /* 活跃状态为白色 */
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 50px; /* 调整按钮宽度 */
  height: 50px; /* 调整按钮高度 */
  background-color: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%; /* 圆形按钮 */
  z-index: 3; /* 确保控制按钮在最前 */
}

.carousel-control:hover {
  opacity: 1;
}

.carousel-control.prev {
  left: 10px;
}

.carousel-control.next {
  right: 10px;
}

.control-icon {
  width: 20px;
  height: 20px;
  background-size: contain;
  background-repeat: no-repeat;
}

.prev-icon {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' width='20' height='20' viewBox='0 0 8 8'%3e%3cpath d='M5.25 0l-4 4 4 4 1.5-1.5L4.25 4l2.5-2.5L5.25 0z'/%3e%3c/svg%3e");
}

.next-icon {
  background-image: url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http://www.w3.org/2000/svg%22%20fill%3D%22%23fff%22%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%208%208%22%3E%3Cpath%20d%3D%22M2.75%200l-1.5%201.5L3.75%204l-2.5%202.5L2.75%208l4-4-4-4z%22/%3E%3C/svg%3E');
}

/* 可选：调整标题的样式以提高可读性 */
@media (max-width: 768px) {
  .carousel-caption p {
    font-size: 1rem;
  }

  .carousel-control {
    width: 40px;
    height: 40px;
  }

  .control-icon {
    width: 16px;
    height: 16px;
  }
}
</style>

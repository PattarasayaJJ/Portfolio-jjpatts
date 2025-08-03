.projects-section {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
  background-color: #ffffff;
}

.projects-container {
  display: flex;
  flex-direction: column;
}

.breadcrumb {
  margin-bottom: 2rem;
  font-size: 0.9rem;
  color: #666;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
}

.breadcrumb-link:hover {
  color: #333;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
}

.breadcrumb-current {
  color: #333;
  font-weight: 500;
}

/* Enhanced Final Project Text Styling */
.final-project-text {
  text-align: left;
  margin: 3rem 0 2rem 0;
  position: relative;
}

.project-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0;
  position: relative;
  display: inline-block;
}

.project-title li {
  list-style: none;
  position: relative;
  padding-left: 0;
}

.project-title li::before {
  content: '✦';
  position: absolute;
  left: -2rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.5rem;
  background: linear-gradient(135deg, #DD489B, #9067D3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: sparkle 2s ease-in-out infinite alternate;
}

.gradient-text {
  background: linear-gradient(135deg, #DD489B 0%, #9067D3 50%, #6366f1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% 200%;
  animation: gradientShift 3s ease-in-out infinite;
  text-shadow: 0 4px 8px rgba(221, 72, 155, 0.3);
  position: relative;
}

.gradient-text::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(135deg, #DD489B, #9067D3, #6366f1);
  border-radius: 2px;
  opacity: 0.6;
  animation: underlineGlow 2s ease-in-out infinite alternate;
}

/* Animations */
@keyframes sparkle {
  0% {
    opacity: 0.7;
    transform: translateY(-50%) scale(1);
  }
  100% {
    opacity: 1;
    transform: translateY(-50%) scale(1.2);
  }
}

@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

@keyframes underlineGlow {
  0% {
    opacity: 0.4;
    transform: scaleX(0.8);
  }
  100% {
    opacity: 0.8;
    transform: scaleX(1);
  }
}

/* Project Card */
.project-card {
  background: #ffffff;
  border-radius: 20px;
  padding: 3rem;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
}

/* Project Images */
.project-images {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}

.project-images.single {
  justify-content: center;
}

.project-images.single .project-image {
  max-width: 600px;
}

.project-image {
  max-width: 400px;
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-image:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.16);
}

/* Project Content */
.project-content {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.project-name {
  font-size: 1.25rem;
  line-height: 1.6;
  color: #4c1d95;
  margin: 0;
  font-weight: 400;
}

.highlight {
  font-weight: 700;
  color: #6b46c1;
}

/* Skills List */
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
  justify-content: center;
}

.skill-tag {
  background: linear-gradient(135deg, #e5d4ff, #f3e8ff);
  color: #6b46c1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid #e5d4ff;
  transition: all 0.3s ease;
}

.skill-tag:hover {
  background: linear-gradient(135deg, #ddd6fe, #e5d4ff);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(107, 70, 193, 0.2);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .project-images {
    gap: 1.5rem;
  }
  
  .project-image {
    max-width: 350px;
  }
  
  .project-title {
    font-size: 2.2rem;
  }
}

@media (max-width: 768px) {
  .projects-section {
    padding: 1.5rem 1rem;
  }
  
  .project-card {
    padding: 2rem 1.5rem;
  }
  
  .project-images {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  
  .project-image {
    max-width: 100%;
    width: 100%;
  }
  
  .project-images.single .project-image {
    max-width: 100%;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .project-name {
    font-size: 1.1rem;
    text-align: left;
  }
  
  .skills-list {
    justify-content: flex-start;
  }
}

@media (max-width: 480px) {
  .project-card {
    padding: 1.5rem 1rem;
  }
  
  .project-name {
    font-size: 1rem;
  }
  
  .skill-tag {
    font-size: 0.75rem;
    padding: 0.4rem 0.8rem;
  }
  
  .project-title {
    font-size: 1.8rem;
  }
  
  .project-title li::before {
    left: -1.5rem;
    font-size: 1.2rem;
  }
}
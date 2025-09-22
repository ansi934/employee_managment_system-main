package repository;
import org.springframework.data.jpa.repository.JpaRepository;
import model.Feedback;

public interface FeedbackRepository extends JpaRepository<Feedback, Long> { }

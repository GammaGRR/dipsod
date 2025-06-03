from django.db import models

class ConsultationMessage(models.Model):
    STATUS_CHOICES = [
        ('new', 'Новая'),
        ('in_progress', 'В обработке'),
        ('completed', 'Завершена'),
    ]

    name = models.CharField("ФИО", max_length=100)
    phone = models.CharField("Телефон", max_length=20)
    message = models.CharField("Сообщение", max_length=200)
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES, 
        default='new'
    )
    created_at = models.DateTimeField("Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Запрос на помощь"
        verbose_name_plural = "Запросы на помощь"

    def __str__(self):
        return f"{self.name} ({self.phone})"


class ConsultationRequest(models.Model):
    STATUS_CHOICES = [
        ('new', 'Новая'),
        ('in_progress', 'В обработке'),
        ('completed', 'Завершена'),
    ]

    name = models.CharField("Имя", max_length=100)
    phone = models.CharField("Телефон", max_length=20)
    status = models.CharField(
        max_length=20, 
        choices=STATUS_CHOICES, 
        default='new'
    )
    created_at = models.DateTimeField("Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Запрос на консультацию"
        verbose_name_plural = "Запросы на консультации"

    def __str__(self):
        return f"{self.name} ({self.phone})"
    
class ServiceRequest(models.Model):
    SERVICE_CHOICES = [
        ('consultation', 'Консультация'),
        ('family_law', 'Семейное право'),
        ('housing_disputes', 'Жилищные споры'),
        ('labor_disputes', 'Трудовые споры'),
    ]

    class Meta:
        verbose_name = "Запрос на услугу"
        verbose_name_plural = "Запросы на услуги"

    name = models.CharField("Имя", max_length=100)
    phone = models.CharField("Телефон", max_length=20)
    service = models.CharField("Услуга",  max_length=50, choices=SERVICE_CHOICES, default='consultation')
    created_at = models.DateTimeField("Дата создания", auto_now_add=True)

    def __str__(self):
        return f"({self.service})"
    
class ServiceCategory(models.Model):
    title = models.CharField("Название категории", max_length=200)
    icon = models.CharField("Иконка", max_length=10)
    emoji = models.CharField("Эмодзи", max_length=10)

    class Meta:
        verbose_name = "Услуги"
        verbose_name_plural = "Услуги"

    def __str__(self):
        return self.title

class Service(models.Model):
    category = models.ForeignKey(ServiceCategory, on_delete=models.CASCADE, related_name='services')
    name = models.CharField("Название услуги", max_length=200)
    order = models.PositiveIntegerField("Порядок", default=0)

    def __str__(self):
        return self.name
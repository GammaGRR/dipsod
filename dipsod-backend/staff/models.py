from django.db import models

class Employee(models.Model):
    name = models.CharField("Имя", max_length=100)
    position = models.CharField("Должность", max_length=100)
    photo = models.ImageField("Фото сотрудника", upload_to='employees/')
    this = models.ImageField("Баннер карточки", upload_to='thisnot/', blank=True)
    bio = models.TextField("Биография", blank=True)
    created_at = models.DateTimeField("Дата создания", auto_now_add=True)

    class Meta:
        verbose_name = "Сотрудников"
        verbose_name_plural = "Сотрудники"

    def __str__(self):
        return self.name
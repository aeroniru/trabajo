# PUNTO 7:-----------------------------------------------------

vectorcalificacion = []

def funcioncalificacion():
    suma=0
    for i in range(1, 6):
        while True:
            try:
                calificacion = float(input(f"Ingrese la calificación {i} (0-100): "))
                if 0 <= calificacion <= 100:
                    vectorcalificacion.append(calificacion)
                    suma+=calificacion
                    break
                else:
                    print("Calificación inválida. Debe estar entre 0 y 100")
            except ValueError:
                print("Valor errado, por favor ingrese una califiacion entre 0 y 100")
    
    print("Las calificaciones son: ", vectorcalificacion)
    promedio = sum(vectorcalificacion) / 5
    print("\nEl promedio es: ", promedio)

funcioncalificacion()
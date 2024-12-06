<div id="graduations">
    <!-- graduation de 40°C à 0°C -->
    <?php for ($i = 40; $i >= 0; $i -= 1): ?>
        <div class="graduation"><?= $i ?>°C</div>
    <?php endfor; ?>
    <div class="bar"></div>
</div>

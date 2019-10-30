<div id="slideshow<?php echo $module; ?>" class="owl-carousel" style="opacity: 1;">
  <?php foreach ($banners as $banner) { ?>
  <div class="item">
    <?php if ($banner['link']) { ?>
    <a href="<?php echo $banner['link']; ?>"><img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" class="img-responsive" /></a>
    <?php } else { ?>
    <img src="<?php echo $banner['image']; ?>" alt="<?php echo $banner['title']; ?>" class="img-responsive" />
    <?php } ?>
  </div>
  <?php } ?>
</div>
<script type="text/javascript"><!--
$('#slideshow<?php echo $module; ?>').owlCarousel({
	items: 6,
	autoPlay: 5000,
	singleItem: true,
	navigation: true,
	navigationText: ['<i class="fa fa-caret-left fa-5x"></i>', '<i class="fa fa-caret-right fa-5x"></i>'],
	pagination: true,
  stopOnHover: true,
  slideSpeed: 1500,
  paginationSpeed: 1500,
  rewindSpeed: 1500,
  loop: true
});
--></script>